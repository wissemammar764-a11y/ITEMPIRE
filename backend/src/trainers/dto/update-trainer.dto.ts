import { PartialType } from '@nestjs/swagger';
import { CreateTrainerAccountDto } from './create-trainer-account.dto';

export class UpdateTrainerDto extends PartialType(CreateTrainerAccountDto) {}