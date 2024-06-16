const express = require("express")
const router = express.Router()

const {
    getPeople,
    createPeople,
    createPeoplePostman,
    modifyPerson,
    deletePerson
} = require("../controllers/people")

//BASE-URL = "/api/people"

router.route("/").get(getPeople).post(createPeople)
router.route("/").post(createPeoplePostman)
router.route("/:id").put(modifyPerson).delete(deletePerson)


// router.get("/", getPeople)
// router.post("/", createPeople)
// router.post("/postman", createPeoplePostman)
// router.put("/:id", modifyPerson)
// router.delete("/:id", deletePerson)


module.exports = router