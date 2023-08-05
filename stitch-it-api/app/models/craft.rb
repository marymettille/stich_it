class Craft < ApplicationRecord
  # :name               string     not_null: true
  validates :name, presence: true, uniqueness: true
  has_many :patterns
end
