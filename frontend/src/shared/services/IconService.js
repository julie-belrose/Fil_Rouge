class IconService {
    constructor() {
        this.loaded = false;
    }

    async loadSprite() {
        if (this.loaded) return;

        try {
            const response = await fetch('/src/shared/icons/sprite.svg');
            const svgText = await response.text();

            const div = document.createElement('div');
            div.innerHTML = svgText;
            document.body.insertBefore(div.firstChild, document.body.firstChild);

            this.loaded = true;
        } catch (error) {
            console.error('Failed to load SVG sprite:', error);
        }
    }
}

export const iconService = new IconService();