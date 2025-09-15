import { Component, OnInit } from '@angular/core';

interface TreeNode {
  key: string;
  children: TreeNode[];
}

@Component({
  selector: 'app-tree-component',
  templateUrl: './tree-component.component.html',
  styleUrls: ['./tree-component.component.scss']
})
export class TreeComponentComponent {

 tree: { [key: string]: string[] } = {
    "a": ["b", "c"],
    "b": ["d", "e"],
    "c": ["f", "g"],
    "e": ["h", "i"],
    "f": ["j", "k"]
  };

  treeNodes: TreeNode[] = [];

  constructor() {
    this.treeNodes = this.buildTree();
  }

  private buildTree(): TreeNode[] {
    const allChildren = new Set<string>();
    Object.values(this.tree).forEach(children => {
      children.forEach(child => allChildren.add(child));
    });
    
    const roots = Object.keys(this.tree).filter(key => !allChildren.has(key));
    
    return roots.map(root => this.buildNode(root));
  }

  private buildNode(key: string): TreeNode {
    const children = this.tree[key] || [];
    return {
      key,
      children: children.map(child => this.buildNode(child))
    };
  }
}
