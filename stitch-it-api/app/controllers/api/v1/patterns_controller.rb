module Api
  module V1
    class PatternsController < ApplicationController
      def index
        render json: Pattern.all
      end

      def create
        dog = Pattern.create(pattern_params)
        render json: dog
      end

      def destroy
        Pattern.destroy(params[:id])
      end

      private

      def pattern_params
        params.require(:pattern).permit(:name, :author, :description)
      end
    end
  end
end
