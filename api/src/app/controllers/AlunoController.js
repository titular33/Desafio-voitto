import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll()
    res.json(alunos);
  }

  async read(req, res) {
    try {
      const{id} = req.params;
      if(!id) {
        return res.status(400).json({error: ['Id não informado'],});
      }
 const aluno = await Aluno.findByPk(id);
  if(!aluno) {
    return res.status(400).json({error: ['Aluno não encontrado'],});
  }

  return res.json(aluno);

  } 
  catch (e)
   {
    return res.status(400).json({error: e.errors.map(err => err.message)});
  }
  }
  async create(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
  return res.json(aluno);
  } catch (e) {
    return res.status(400).json({error: e.errors.map(err => err.message)});

  }
  }
  async update(req, res) {
    try {
      const{id} = req.params;
      if(!id) {
        return res.status(400).json({error: ['Id não informado'],});
      }
 const aluno = await Aluno.findByPk(id);
  if(!aluno) {
    return res.status(400).json({error: ['Aluno não encontrado'],});
  }
  const alunoAtualizado = aluno.uptade(req.body);
  return res.json(alunoAtualizado);
  } 
  catch (e) {
    return res.status(400).json({error: e.errors.map(err => err.message)});

  }
  }
  async delete(req, res) {
    try {
      const{id} = req.params;
      if(!id) {
        return res.status(400).json({error: ['Id não informado'],});
      }
 const aluno = await Aluno.findByPk(id);
  if(!aluno) {
    return res.status(400).json({error: ['Aluno não encontrado'],});
  }
  await aluno.destroy();
  return res.json({apagado: true,});
  } 
  catch (e) {
    return res.status(400).json({error: e.errors.map(err => err.message)});

  }
  }
}
export default new AlunoController();
