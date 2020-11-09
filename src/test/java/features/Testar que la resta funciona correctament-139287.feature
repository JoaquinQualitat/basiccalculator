#Auto generated Octane revision tag
@TID139287REV0.3.0
Feature: Basic calculator
Scenario: Testar que la resta funciona correctament
    	Given  Accedir a la pàgina
        And  En Operation ha d´estar seleccionat Subtract
		When Introduir First number
		And Introduir Second number   
        And Clic en Calculate
		Then En Answer ha d´aparèixer el resultat
       