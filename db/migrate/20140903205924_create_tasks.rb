class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.belongs_to :user
      t.string :action
      t.string :priority
      t.timestamps
    end
  end
end
