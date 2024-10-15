import { IsEmail, IsNotEmpty, IsString, IsUUID } from "class-validator";
import { LocationEntity } from "src/geoclimate/infra/entities/geoclimate.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn} from "typeorm";


@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    @IsUUID()
    id: string;

    @Column()
    @IsString({ message: 'nome deve ser uma string.' })
    @IsNotEmpty()
    name: string;

    @Column({ unique: true })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @Column()
    password: string;
    
    @Column( {type: 'decimal', precision: 10, scale: 2, nullable: true })
    weight:number | null;

    @Column( {type: 'decimal', precision: 10, scale: 2, nullable: true })
    waterIntake:number| null;

    @OneToOne(() => LocationEntity, location => location.user)
    location: LocationEntity;
}

