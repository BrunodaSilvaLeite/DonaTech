package com.donatech.projetodonatech.services;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.donatech.projetodonatech.dto.DonorDto;
import com.donatech.projetodonatech.dto.UpdateDonorDto;
import com.donatech.projetodonatech.entities.Donor;
import com.donatech.projetodonatech.repository.DonorRepository;

@Service
public class DonorService {
	
	private DonorRepository donorRepository;
	
	public DonorService(DonorRepository donorRepository) {
		super();
		this.donorRepository = donorRepository;
	}

	public Long createDonor(DonorDto donorDto) {
		
		var entity = new Donor(null,
				donorDto.nome(), 
				donorDto.cpf(), 
				donorDto.email(), 
				donorDto.senha(), 
				donorDto.rua(),
				donorDto.bairro(),
				donorDto.num_casa(),
				donorDto.num_telefone(),
				LocalDateTime.now(),
				null);
		
		var donorSaved = donorRepository.save(entity);
		
		return donorSaved.getId_doador();
	}
	
	public Optional<Donor> getDonorById(Long id_doador){
	    return donorRepository.findById(id_doador);   
	}
	
	public List<Donor> listDonors(){
		return donorRepository.findAll();
	}
	//String nome, String email, String senha, String rua, String bairro, int num_casa
	public void updateDonorById(Long id_doador, UpdateDonorDto updateDonorDto) {
		var donorExist = donorRepository.findById(id_doador);
		
		if(donorExist.isPresent()) {
			var donor = donorExist.get();
			
			if(updateDonorDto.nome() != null) {
				donor.setNome(updateDonorDto.nome());
			}
			if(updateDonorDto.email() != null) {
				donor.setEmail(updateDonorDto.email());
			}
			if(updateDonorDto.senha() != null) {
				donor.setSenha(updateDonorDto.senha());
			}
			if(updateDonorDto.rua() != null) {
				donor.setRua(updateDonorDto.rua());
			}
			if(updateDonorDto.bairro() != null) {
				donor.setBairro(updateDonorDto.bairro());
			}
			if(updateDonorDto.num_casa() != null) {
				donor.setNum_casa(updateDonorDto.num_casa());
			}
			if(updateDonorDto.num_telefone() != null) {
				donor.setNum_telefone(updateDonorDto.num_telefone());
			}
			
			donorRepository.save(donor);
		}
	}
	
	public void deleteDonorById(Long id_doador) {
		var id = id_doador;
		var donorExist = donorRepository.existsById(id);
		
		if(donorExist) {
			donorRepository.deleteById(id);
		}
	}

}
