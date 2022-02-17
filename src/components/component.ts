export interface Component {
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
}

/**
 * Encapsulate the HTML element creation
 */
export class BaseComponent<T extends HTMLElement> implements Component {
  /**
   * protected
   * - 외부에서 볼 수 없음
   * - 이것을 상속하는 자식 클래스에서만 접근이 가능
   * readonly
   * - 한번 만들어진 element는 읽기만 가능
   * - 요소를 만들면, 요소 안에 상태들은 변경이 가능하지만
   * - 요소 자체를 다른 것으로 변경하는 것은 안됨
   */
  protected readonly element: T;
  constructor(htmlString: string) {
    const template = document.createElement('template');
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild! as T;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }
}
