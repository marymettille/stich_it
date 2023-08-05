class Pattern < ApplicationRecord
  # :id                 unique
  # :author             string
  # :description        text
  # timestamps

  # Foreign keys
  # :craft_id
  belongs_to :craft
  validates :craft_id, presence: true
end
