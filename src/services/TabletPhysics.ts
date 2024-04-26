import { MutableRefObject, RefObject } from "react";

class TabletPhysics{
    private rotate: number;
    private speed: number;
    private boost: number;

    private speedSlowdown = 0.05;

    private minRotate: number;
    private maxRotate: number;

    private maxSpeed: number;
    
    private root: RefObject<HTMLDivElement>;
    private updater = 0;

    constructor(root: RefObject<HTMLDivElement>) {
        console.log('init');
        this.root = root;

        this.rotate = -20;          // Координата
        this.speed = 1;             // Скорость
        this.boost = 0.2;           // Переменное ускорение (меняет знак)
        this.speedSlowdown = 0.05;  // Постоянное замедление

        this.minRotate = -20;
        this.maxRotate = 20;

        this.maxSpeed = this.speed;

        this.initPhysics();
    }

    private setRotate(value: number) {
        this.rotate = value;

        if(this.root.current === null) return;
        this.root.current.style.transform = 'rotate(' + value + 'deg)';
    }

    initPhysics() {
        this.updater = setInterval(this.update.bind(this), 10);
    }

    updateSpeed() {
        if(this.speed > 0) {
            this.speed -= this.speedSlowdown;
        }
        else {
            this.speed += this.speedSlowdown;
        }

        if(this.rotate > 0) {
            this.speed -= this.boost;
        }
        else {
            this.speed += this.boost;
        }
        
    }

    stop() {
        this.speed = 0;
        this.rotate = 0;
    }

    setImpulse() {
        console.log('click');
        
        if(this.rotate < 0) {
            this.speed = 3;
            this.maxSpeed = 3;
        }
        else {
            this.speed = -3;
            this.maxSpeed = -3;
        }
        this.update();
    }

    update() {
        // Пересчитываем скорость\
        this.updateSpeed();
        
        // При слишком маленькой максимальной скорости останавливаем движение
        if(Math.abs(this.maxSpeed) < Math.abs(this.boost) * 2) {
            this.stop();
        }
        // Иначе пересчитываем координату
        else {
            let oldRotate = this.rotate;
            this.setRotate(this.rotate + this.speed);

            if(oldRotate * this.rotate < 0) { // Если разные знаки
                this.maxSpeed = this.speed;
            }
        }
    }

    destroy() {
        console.log('destroy');
        clearInterval(this.updater);
    }

}

export default TabletPhysics;