/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `Sorvete` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `lucro` to the `Sorvete` table without a default value. This is not possible if the table is not empty.
  - Added the required column `preco` to the `Sorvete` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sorvete" ADD COLUMN     "lucro" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "preco" DOUBLE PRECISION NOT NULL;

-- CreateTable
CREATE TABLE "Funcionario" (
    "idFunc" SERIAL NOT NULL,
    "cpf" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,

    CONSTRAINT "Funcionario_pkey" PRIMARY KEY ("idFunc")
);

-- CreateTable
CREATE TABLE "Contas" (
    "id" SERIAL NOT NULL,
    "lucroMensal" DOUBLE PRECISION NOT NULL,
    "lucroAnual" DOUBLE PRECISION NOT NULL,
    "lucroSemanal" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Contas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Funcionario_cpf_key" ON "Funcionario"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Funcionario_email_key" ON "Funcionario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Funcionario_telefone_key" ON "Funcionario"("telefone");

-- CreateIndex
CREATE UNIQUE INDEX "Sorvete_nome_key" ON "Sorvete"("nome");
