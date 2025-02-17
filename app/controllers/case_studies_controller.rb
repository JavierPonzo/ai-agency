class CaseStudiesController < ApplicationController
  def index
    @case_studies = CaseStudy.all.order(created_at: :desc)
  end

  def show
    @case_study = CaseStudy.find(params[:id])
  end
end
