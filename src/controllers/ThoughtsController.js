const Thought = require("../model/Thought");

module.exports = {
  async findAllThoughts(request, response) {
    const thoughts = await Thought.findAll({ raw: true });

    return response.json(thoughts);
  },

  async createThought(request, response) {
    const { title, description } = request.body;

    const thoughts = await Thought.create({ title, description });

    return response.json(thoughts);
  },

  async findThoughts(request, response) {
    const { id } = request.params;

    const thought = await Thought.findOne({ where: { id: id } });

    return response.json(thought);
  },

  async updateThought(request, response) {
    const { id } = request.params;
    const { title, description } = request.body;

    const thought = await Thought.update(
      { title, description },
      { where: { id: id } }
    );

    return response.json(thought);
  },

  async deleteThought(request, response) {
    const { id } = request.params;

    const thought = await Thought.destroy({ where: { id: id } });

    return response.json({
      message: "Pensamento deletado com sucesso!",
    });
  },
};
