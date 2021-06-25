const table = 'Crop'
const createdAt = new Date()
const updatedAt = new Date()
const data = [
  { id: '2a6ae613-29d4-4a1f-a546-6246f851ed48', name: 'Wheat', createdAt, updatedAt},
  { id: '216bc5cc-0d23-417c-b57b-bffe0beb3753', name: 'Rice', createdAt, updatedAt},
  { id: 'ed8328b2-28a3-4925-875a-a54c5c61ae3f', name: 'Maize', createdAt, updatedAt},
  { id: 'bee0468e-4f4e-45e1-bd43-09eb4109bc57', name: 'Soybeans', createdAt, updatedAt},
  { id: 'db33376d-b470-46f8-b5a4-d93e478b8901', name: 'Beans', createdAt, updatedAt},
  { id: 'ba544f4e-ae7c-4f77-8b2a-230c5cbb11f0', name: 'Tomato', createdAt, updatedAt},
  { id: '18b5408b-dc01-4a55-ba68-4a68de6d5f36', name: 'Cucumber', createdAt, updatedAt},
  { id: '42b61ad0-e121-4c72-b91f-e102b4a4f228', name: 'Apple', createdAt, updatedAt},
  { id: '047ddf9d-72b2-4958-ab5e-41cfc8ca9cb9', name: 'Grapes', createdAt, updatedAt}
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(table, data, {})
  },
  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete(table, null, {})
  }
}
