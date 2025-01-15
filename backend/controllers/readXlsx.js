import prismaClient from "../src/prisma-client.js";

export const readXlsx = async (req, res) => {
    const studentData = req.body.data;

    try {
        const existingPeserta = await prismaClient.peserta.findMany({
            include: {
              mahasiswa: { select: { nim: true } }
            }
          });


          const pesertaMap = new Map(
            existingPeserta.map(peserta => [peserta.mahasiswa.nim, peserta])
          );

          const updates = studentData.map(async student => {
            const { nim, reading, listening, structure } = student;

            const idPeserta = await prismaClient.peserta.findFirst({
                where: {
                  mahasiswa: {
                    nim: nim, 
                  },
                },
                select: {
                  id: true, 
                },
              });
 
      
            // Abaikan jika nim tidak ditemukan di database
            if (!pesertaMap.has(nim)) {
              console.log(`NIM ${nim} tidak ditemukan, data diabaikan.`);
              return null;
            }
      
            const peserta = pesertaMap.get(nim);
            const totalScore = reading + listening + structure;
            const status = totalScore >= 30 ? "lulus" : "remidial";
      
            // Update status peserta dan upsert nilai
            await prismaClient.peserta.update({
              where: { id: idPeserta.id  },
              data: { status: status }
            });
     
          });
          
    } catch (error) {
        console.log(error)
    }
  
    // console.log("Data yang disimpan:", database);
    // res.status(200).send("Data berhasil disimpan!");
}

 
            // await prisma.nilai.upsert({
            //   where: { id_peserta: peserta.id },
            //   update: {
            //     divisi: "puskom",
            //     reading,
            //     listening,
            //     total: totalScore
            //   },
            //   create: {
            //     id_peserta: peserta.id,
            //     divisi: "puskom",
            //     reading,
            //     listening,
            //     total: totalScore
            //   }
            // });
      
            // console.log(`NIM ${nim} diproses dengan status: ${status}`);