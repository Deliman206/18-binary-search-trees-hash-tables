'use strict';

import KAryNode from;
import KAryTree from;

const one = new KAryNode(1);

one.appendChild(2);
one.appendChild(3);
one.appendChild(4);

one.children[1].appendChild(5);
one.children[1].appendChild(6);
one.children[1].appendChild(7);

one.children[1].children[1].appendChild(8);

const KAryTree = new KAryTree(one);

KAryTree.breadthFirstTraversal();
