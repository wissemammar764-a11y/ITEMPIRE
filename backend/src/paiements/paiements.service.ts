import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { randomBytes } from 'crypto';
import { CreatePaiementDto } from './dto/create-paiement.dto';
import { UpdatePaiementDto } from './dto/update-paiement.dto';
import { Paiement } from './entities/paiement.entity';

@Injectable()
export class PaiementsService {
  constructor(@InjectRepository(Paiement) private paiementRepository: Repository<Paiement>) {}

  create(createPaiementDto: CreatePaiementDto) {
    const newPaiement = this.paiementRepository.create({
      ...createPaiementDto,
      payment_date: new Date(),
      payment_status: 'PAID',
      invoice_number: `INV-${Date.now()}-${randomBytes(2).toString('hex').toUpperCase()}`,
    });
    return this.paiementRepository.save(newPaiement);
  }

  // Jointure pour afficher étudiant/formation plutôt que des ID bruts
  findAll() {
    return this.paiementRepository.query(`
      SELECT
        p.payment_id,
        p.amount,
        p.payment_method,
        p.payment_date,
        p.payment_status,
        p.invoice_number,
        u.first_name AS etudiant_prenom,
        u.last_name AS etudiant_nom,
        f.title AS formation_titre
      FROM payments p
      INNER JOIN enrollments e ON p.enrollment_id = e.enrollment_id
      INNER JOIN students st ON e.student_id = st.student_id
      INNER JOIN users u ON st.user_id = u.user_id
      INNER JOIN sessions s ON e.session_id = s.session_id
      INNER JOIN formations f ON s.formation_id = f.formation_id
      ORDER BY p.payment_id DESC;
    `);
  }

  findOne(id: number) {
    return this.paiementRepository.findOneBy({ payment_id: id });
  }

  update(id: number, updatePaiementDto: UpdatePaiementDto) {
    return this.paiementRepository.update({ payment_id: id }, updatePaiementDto);
  }

  remove(id: number) {
    return this.paiementRepository.delete({ payment_id: id });
  }
}