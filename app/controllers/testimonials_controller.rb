class TestimonialsController < ApplicationController
  def index
    @testimonials = Testimonial.all.order(created_at: :desc)
  end
end
