/**
 * Le mot-clé static permet de définir une méthode statique d'une classe. Les méthodes statiques ne sont pas disponibles sur les instances d'une classe mais sont appelées sur la classe elle-même. Les méthodes statiques sont généralement des fonctions utilitaires (qui peuvent permettre de créer ou de cloner des objets par exemple).
 */

class Animal {
    sayHello() {
        return `${this.constructor.greeting}! I'm ${this.name}!`;
    }
}

class Cat {
    name = 'name'
    static greeting = 'greeting';

}
