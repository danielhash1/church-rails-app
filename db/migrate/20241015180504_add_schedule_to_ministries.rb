class AddScheduleToMinistries < ActiveRecord::Migration[7.1]
  def change
    add_column :ministries, :schedule, :string
  end
end
