# Configurações iniciais
import pygame
import random

pygame.init()
pygame.display.set_caption("Jogo Snake Python")
largura, altura = 600, 400
pygame.display.set_mode((largura, altura))
relogio = pygame.time.Clock() # Este relógio serve para acada troca do ponteiro do tempo a cobrinha anda o valor da variavel (velocidade_cobra) 

# -core RGB
preta = (0, 0, 0)
branca = (255, 255, 255)
vermelha = (255, 0, 0)
verde = (0, 255, 0)

# -paramentros da cobrinha
tamanho_quadrado = 10
velocidade_cobra = 15





# Criar um loop Infinito

# Desenhar os objetos do jogo na tela
# -pontuação
# -cobrinha
# -comida

# Criar a lógica de terminar o Jogo
# -o que acontece:
# -cobra bateu na parede
# -Cobra bateu na própria cobra

# Pegar a interação do usuário
# -fechou a tela
# -apertou as teclas do teclado para mover a cobra