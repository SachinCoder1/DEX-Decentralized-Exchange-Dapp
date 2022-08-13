import { client } from "../../sanity/SanityClient"

const createUser = async (req, res) => {
  try {
    console.log("You are in createUser api")
    const userDoc = {
      _type: 'users',
      _id: req.body.walletAddress,
      userName: 'Unnamed',
      address: req.body.walletAddress,
    }
    console.log(userDoc)

    await client.createIfNotExists(userDoc)

    res.status(201).send({ message: 'success' })
  } catch (error) {
    res.status(500).send({ message: 'error', data: error.message })
  }
}

export default createUser