import { Router } from 'express'
import * as skillsCtrl from '../controller/skills.js'


const router = Router()

/* GET users listing. */
router.get('/', skillsCtrl.index)
router.get('/new', skillsCtrl.new)
router.get('/:id', skillsCtrl.show)
router.post('/', skillsCtrl.create)
router.delete('/:id', skillsCtrl.delete)
router.get('/:id/edit', skillsCtrl.edit)
router.put('/:id', skillsCtrl.update)


export {
  router
}
