require 'docker'

class Style
  include ActiveModel::Model

  attr_accessor :repository, :language, :output

  def persisted?
    false
  end

  def check
    container = Docker::Container.create('Cmd' => [@repository],
                                         'Image' => "#{docker_repository}/#{@language}",
                                         'Tty' => true)
    container.start
    container.wait(60)
    @output = container.logs(stdout: true)
    container.delete(force: :true)
  end

  def docker_repository
    ENV.fetch('REPOSITORY', 'swaggy')
  end
end
