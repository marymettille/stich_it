module Api
  module V1
    class CraftsController < ApplicationController
      before_action :set_craft, only: %i[show update destroy]

      # GET /crafts
      def index
        render json: Craft.all
      end

      def show
        render json: Craft.find(params[:id])
      end
    end
  end
end
