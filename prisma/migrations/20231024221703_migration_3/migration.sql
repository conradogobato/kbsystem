-- CreateTable
CREATE TABLE "FuncSorvete" (
    "id" SERIAL NOT NULL,
    "idSorvete" INTEGER NOT NULL,
    "idFunc" INTEGER NOT NULL,
    "vendido" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "FuncSorvete_pkey" PRIMARY KEY ("id")
);
