import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Student from 'App/Models/students'

export default class extends BaseSeeder {
  public async run () {
    await Student.createMany([
      {
        name: 'kyousuke',
        code: 's21014',
      },
      {
        name: 'shunsuke',
        code: 's21030',
      }
    ])
  }
}
