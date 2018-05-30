class StaticController < ApplicationController
  def hello_world; end

  def react
    render layout: 'react_client'
  end
end
