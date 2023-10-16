/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Props {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<Props> {
  // constructor(props: Props) {
  //   super(props);
  // }
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
