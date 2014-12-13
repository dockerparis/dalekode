class StyleController < ApplicationController

  def check
    @style = Style.new(params[:style])
    @style.check

    output = @style.output.encode('utf-8', :invalid => :replace, :undef => :replace, :replace => '_')
    render json: { html: output.html_safe }
  end
end
