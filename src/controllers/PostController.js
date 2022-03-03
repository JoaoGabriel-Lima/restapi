import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  async createPost(req, res) {
    try {
      const { id } = req.params;
      const { title, content } = req.body;

      if (!title || !content) {
        return res.status(400).send("Please provide title and content");
      }

      let user = await prisma.user.findUnique({ where: { id: Number(id) } });

      if (!user) {
        return res.status(404).json({ msg: "User not found" });
      }

      const post = await prisma.post.create({
        data: {
          title,
          content,
          userId: Number(id),
        },
        include: {
          author: true,
        },
      });

      return res.status(201).json({
        post,
      });
    } catch (error) {
      return res.status(500).json({ error });
    }
  },
  async getAllPosts(req, res) {
    try {
      const posts = await prisma.post.findMany({
        include: {
          author: true,
        },
      });
      return res.status(200).json({ posts });
    } catch (error) {
      return res.status(500).json({ error });
    }
  },

  async updatePost(req, res) {
    try {
      const { id } = req.params;
      const { title, content, postID } = req.body;

      if (!postID) {
        return res
          .status(400)
          .send("Please provide title, content and a valid userID");
      }

      const user = await prisma.user.findUnique({
        where: { id: Number(id) },
      });

      if (!user) {
        return res.status(404).json({ msg: "User not found" });
      }

      // check if post exists and belongs to user

      let post = await prisma.post.findUnique({
        where: { id: Number(postID) },
        include: {
          author: true,
        },
      });

      if (!post) {
        return res.status(404).json({ msg: "Post not found" });
      }

      if (post.author.id !== user.id) {
        return res
          .status(404)
          .json({ msg: "This post don't belongs to your user" });
      }

      post = await prisma.post.update({
        where: {
          id: Number(postID),
        },
        data: {
          title,
          content,
        },
      });

      return res.status(200).json({ post });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  },
};
