import { Tag } from './tag.model';
import { isArray, isEmpty } from 'lodash';

/**
 * 清单列表实体类
 * @author liushao <liushao121@hotmail.com>
 * @since 0.0.1
 * @export
 * @class Todo
 */
export class Todo {
  constructor({ title, start, deadline, tags, children }) {
    this.title = title;
    this.start = start;
    this.deadline = deadline;
    this.tags = tags;
    this.children = children;
  }

  /**
   * 清单名称
   * @since 0.0.1
   * @type {string}
   * @memberof Todo
   */
  title: string;
  /**
   * 清单项状态 true - 已完成 false - 待完成
   * @since 0.0.1
   * @private
   * @type {boolean}
   * @memberof Todo
   */
  private done: boolean;
  public get status() {
    //   如果存在子任务，那么当前任务的完成状态由子任务的状态决定
    if (isArray(this.children) && !isEmpty(this.children)) {
      return this.children.every(e => e.status);
    }
    return this.done;
  }
  public set status(status: boolean) {
    //   如果有子任务那么就不能直接设置当前任务的状态
    if (!isEmpty(this.children)) {
      this.done = status;
    }
  }
  /**
   * 开始时间
   * @since 0.0.1
   * @type {string}
   * @memberof Todo
   */
  start: string;
  /**
   * 截止时间
   * @since 0.0.1
   * @type {string}
   * @memberof Todo
   */
  deadline: string;
  /**
   * 所属标签
   * @since 0.0.1
   * @type {Tag[]}
   * @memberof Todo
   */
  tags?: Tag[];

  /**
   * 任务还可以有子任务
   *
   * @type {Itodo[]}
   * @memberof Todo
   */
  children?: Todo[];

  /**
   * 进度数据 由子任务的完成度计算得到
   *
   * @readonly
   * @memberof Todo
   */
  get progress() {
    const { children = [] } = this;
    const doneCount = children.filter(f => f.status).length;
    return ((doneCount / children.length) * 100).toFixed(0);
  }

  /**
   * 循环反序列化
   *
   * @static
   * @param {Todo} { title, start, deadline, tags = [], children = [] }
   * @returns
   * @memberof Todo
   */
  static create({ title, start, deadline, tags = [], children = [] }: Todo) {
    return new Todo({
      title,
      start,
      deadline,
      tags: tags.map(({ name }) => new Tag({ name })),
      children: children.map((v: Todo) => Todo.create(v))
    });
  }
}
