import { BaseComponent } from '../../component.js';

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`
      <section class="video">
        <div class="video__player">
          <iframe class="video__iframe"></iframe>
          <h3 class="video_title"></h3>
        </div>
      </section>
    `);

    const iframe = this.element.querySelector(
      '.video__iframe'
    )! as HTMLIFrameElement;
    console.log(url);
    iframe.src = `https://www.youtube.com/embed/_5DsG7oj4Kw`; // TODO: url -> videoId -> embedded url

    const titleElement = this.element.querySelector(
      '.video_title'
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }
}

// <iframe
// width='950'
// height='534'
// src='https://www.youtube.com/embed/_5DsG7oj4Kw'
// title='YouTube video player'
// frameborder='0'
// allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
// allowfullscreen
// ></iframe>;
