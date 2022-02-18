import { BaseComponent } from '../../component.js';

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`
      <section class="video">
        <div class="video__player">
          <iframe class="video__iframe"></iframe>
          <h3 class="page-item__title video_title"></h3>
        </div>
      </section>
    `);

    const iframe = this.element.querySelector(
      '.video__iframe'
    )! as HTMLIFrameElement;
    iframe.src = this.convertToEmbeddedURL(url);

    const titleElement = this.element.querySelector(
      '.video_title'
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }

  /**
   * input
   * - https://www.youtube.com/watch?v=_5DsG7oj4Kw
   * - https://youtu.be/_5DsG7oj4Kw?t=24
   * output
   * - https://www.youtube.com/embed/_5DsG7oj4Kw
   * 정규표현식 Regex
   */
  private convertToEmbeddedURL(url: string): string {
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-_]{11}))|(?:youtu.be\/([a-zA-Z0-9-_]{11})))/;
    const match = url.match(regExp);
    const videoId = match ? match[1] || match[2] : undefined;
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
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
