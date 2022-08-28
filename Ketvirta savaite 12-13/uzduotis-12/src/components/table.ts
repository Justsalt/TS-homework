export type TableProps<Type> = {
  title: string,
  columns: Type,
  rowsData: Type[],
};

type RowData = {
  id: string,
  [key: string]: string,
};
class Table<Type extends RowData> {
  public htmlElement: HTMLTableElement;

  private props: TableProps<Type>;

  private tbody: HTMLTableSectionElement;

  private thead: HTMLTableSectionElement;

  public constructor(props: TableProps<Type>) {
    this.props = props;
    this.htmlElement = document.createElement('table');
    this.tbody = document.createElement('tbody');
    this.thead = document.createElement('thead');

    this.initialize();
  }

  private initializeHead = (): void => {
    const headArray = Object.values(this.props.columns);
    const headerToString = headArray.map((header) => `<th>${header}</th>`).join('');
    this.thead.innerHTML = `
      <tr>
        <th colspan="${headArray.length}" class="text-center h2">${this.props.title}</th>
      </tr>
      <tr>${headerToString}</tr>
    `;
  };

  private initializeBody = (): void => {
    this.tbody.innerHTML = '';
    const rowsHtmlElements = this.props.rowsData
      .map((rowData) => {
        const rowElements = document.createElement('tr');
        const cellsString = Object.keys(this.props.columns)
          .map((key) => `<td>${rowData[key]}</td>`).join(' ');
        rowElements.innerHTML = cellsString;

        return rowElements;
      });
    this.tbody.append(...rowsHtmlElements);
  };

  private initialize = (): void => {
    this.initializeHead();
    this.initializeBody();

    this.htmlElement.className = 'table';
    this.htmlElement.append(
      this.thead,
      this.tbody,
    );
  };
}

export default Table;
