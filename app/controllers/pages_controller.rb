class PagesController < ApplicationController
  def home
    @testimonials = Testimonial.all
    @case_studies = CaseStudy.all
  end
end
