module Api
  module V1
    class PatternsController < ApplicationController
      def index
        render json: Pattern.all
      end

      def create
        pattern = Pattern.create(pattern_params)
        render json: pattern
      end

      def destroy
        Pattern.destroy(params[:id])
      end

      def view
        render json: Pattern.find(params[:id])
      end

      private

      def pattern_params
        params.require(:pattern).permit(:name, :author, :description, :craft_id)
      end
    end
  end
end
