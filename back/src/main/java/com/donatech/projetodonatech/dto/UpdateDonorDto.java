package com.donatech.projetodonatech.dto;

public record UpdateDonorDto(String nome, String email, String senha, String rua, String bairro, Integer num_casa, String num_telefone) {
}
