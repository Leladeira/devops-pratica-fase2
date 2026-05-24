const express = require('express');
const app = express();

app.use(express.json());

// Rota de Health Check atualizada com a sua nova mensagem
app.get('/api/v1/health', (req, res) => {
  res.status(200).json({ status: 'Fase1 Devops - Entregue' });
});

module.exports = app;

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}