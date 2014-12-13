class StyleController < ApplicationController

  def check
    @style = Style.new(params[:style])
    @style.check

    if @style.valid?
      render json: { html: @style.format }
    else
      render json: { error: @style.output }, status: 500
    end
  end
end
