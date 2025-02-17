class CreateCaseStudies < ActiveRecord::Migration[7.1]
  def change
    create_table :case_studies do |t|
      t.string :title
      t.string :client
      t.text :description
      t.text :results

      t.timestamps
    end
  end
end
