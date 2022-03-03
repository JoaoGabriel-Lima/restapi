import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  async createUser(req, res) {
    try {
      const { name, email } = req.body;

      if (!name || !email) {
        return res.status(400).send("Please provide name and email");
      }

      let user = await prisma.user.findUnique({ where: { email } });

      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      }

      user = await prisma.user.create({
        data: {
          name,
          email,
        },
      });

      return res.status(201).json({
        user,
      });
    } catch (error) {
      return res.status(500).json({ error });
    }
  },

  async getUsers(req, res) {
    try {
      const users = await prisma.user.findMany();
      return res.status(200).json({ users });
    } catch (error) {
      return res.status(500).json({ error });
    }
  },

  async getUserbyId(req, res) {
    try {
      const { id } = req.params;
      let user = await prisma.user.findUnique({ where: { id: Number(id) } });

      if (!user) {
        return res.status(404).json({ msg: "User not found" });
      }

      return res.status(200).json({ user });
    } catch (error) {
      return res.status(500).json({ error });
    }
  },

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { name, email } = req.body;
      let user = await prisma.user.findUnique({ where: { id: Number(id) } });
      let userExists = null;

      if (email != undefined) {
        userExists = await prisma.user.findUnique({ where: { email } });
      }

      if (!user) {
        return res.status(404).json({ msg: "User not found" });
      }
      if (userExists && userExists.id !== Number(id)) {
        return res.status(400).json({ msg: "User already exists" });
      }

      user = await prisma.user.update({
        where: { id: Number(id) },
        data: { name, email, updatedAt: new Date() },
      });

      return res.status(200).json({ user });
    } catch (error) {
      return res.status(500).json({ error });
    }
  },

  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      let user = await prisma.user.findUnique({ where: { id: Number(id) } });

      if (!user) {
        return res.status(404).json({ msg: "User not found" });
      }

      user = await prisma.user.delete({
        where: { id: Number(id) },
      });

      return res.status(200).json({ user });
    } catch (error) {
      return res.status(500).json({ error });
    }
  },
};
