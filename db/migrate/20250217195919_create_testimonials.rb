class CreateTestimonials < ActiveRecord::Migration[7.1]
  def change
    create_table :testimonials do |t|
      t.string :name
      t.string :company
      t.text :feedback
      t.integer :rating

      t.timestamps
    end
  end
end
