require 'docker'

class Style
  include ActiveModel::Model
  include ActiveModel::Validations

  attr_accessor :repository, :language, :output, :status

  validates :status, numericality: { greater_than_or_equal_to: 0 }

  def persisted?
    false
  end

  def check
    begin
      container = Docker::Container.create('Cmd' => [@repository],
                                           'Image' => "#{docker_repository}/linter-#{@language}",
                                           'Tty' => true)
      container.start
      @status = container.wait(30)['StatusCode'] || -1
      @status = @status - 256 if @status >= 128
      @output = container.logs(stdout: true)
      container.delete(force: :true)
    rescue
      @status  = -1
      @output  = 'An error occured.'
    end
  end

  def docker_repository
    ENV.fetch('REPOSITORY', 'swaggy')
  end

  def format
    @output.encode('utf-8', invalid: :replace, undef: :replace, replace: '_')
           .html_safe
  end
end
