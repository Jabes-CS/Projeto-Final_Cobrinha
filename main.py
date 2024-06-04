# Configurações iniciais
import pygame
import random

pygame.init()
pygame.display.set_caption("Jogo Snake Python")
largura, altura = 1200, 750
tela = pygame.display.set_mode((largura, altura))
relogio = pygame.time.Clock() # Este relógio serve para acada troca do ponteiro do tempo a cobra anda o valor da variavel (velocidade_cobra) 

# -cores RGB
preta = (0, 0, 0)
branca = (255, 255, 255)
vermelha = (255, 0, 0)
verde = (0, 255, 0)

# -parametros da cobrinha
tamanho_quadrado = 20
velocidade_jogo = 15 # Podemos implementar também que quanto mais a cobra vai crescendo ela vai ficando mais rápida

def gerar_cimida():
    comida_x = round(random.randrange(0, largura - tamanho_quadrado) / 20.0) * 20.0
    comida_y = round(random.randrange(0, altura - tamanho_quadrado) / 20.0) * 20.0
    return comida_x, comida_y

def desenhar_comida(tamanho, comida_x, comida_y):
    pygame.draw.rect(tela, verde, [comida_x, comida_y, tamanho, tamanho])

def desenhar_cobra(tamanho, pixels):
    for pixel in pixels:
        pygame.draw.rect(tela, branca, [pixel[0], pixel[1], tamanho, tamanho])

def desenhar_pontuacao(pontuacao):
    fonte = pygame.font.SysFont("Helvetica", 35)
    texto = fonte.render(f"Pontos: {pontuacao}", True, vermelha)
    tela.blit(texto, [1, 1])

def selecionar_velocidade(tecla):
    pass

def rodar_jogo():
    fim_jogo = False

    x = largura / 2
    y = altura / 2

    velocidade_x = 0
    velocidade_y = 0

    tamanho_cobra = 1
    pixels = []

    comida_x, comida_y = gerar_cimida()

    while not fim_jogo:
        tela.fill(preta)
        
        for evento in pygame.event.get():
            if evento.type == pygame.QUIT:
                fim_jogo = True
            elif evento.type == pygame.KEYDOWN:
                velocidade_x, velocidade_y = selecionar_velocidade(evento.key)

        # -desenhar_comida
        desenhar_comida(tamanho_quadrado, comida_x, comida_y)

        # -desenhar_cobra
        pixels.append([x, y]) #adicionando novo pixel a cobra
        if len(pixels) > tamanho_cobra: #caso a quantidade de pixels for maior que a cobra
            del pixels[0] #deleta a parte da cobra que se encontra na posição [0] - último pixel (isso tudo é o andar da cobra)

        #se a cobra bateu no proprio corpo
        for pixel in pixels[:-1]: #verificando se algum pixel da cobrinha estiver ocupando algum pixel dela mesma, estará ocupando o mesmo espaço com isso ela bateu e o jogo para
            if pixel == [x, y]:
                fim_jogo = True

        desenhar_cobra(tamanho_quadrado, pixels)

        # -desenhar_pontos
        desenhar_pontuacao(tamanho_cobra - 1)

        # -atualização da tela
        pygame.display.update()

        # -criar nova comida
        if x == comida_x and y == comida_y:
            tamanho_cobra += 1
            comida_x, comida_y = gerar_cimida()

        relogio.tick(velocidade_jogo)

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

rodar_jogo()