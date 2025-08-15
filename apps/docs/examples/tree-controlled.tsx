"use client";

import {
  TreeExpander,
  TreeIcon,
  TreeLabel,
  TreeNode,
  TreeNodeContent,
  TreeNodeTrigger,
  TreeProvider,
  TreeView,
} from "@repo/tree";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function TreeControlledExample() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [expandedIds] = useState<string[]>([
    "team",
    "engineering",
    "design",
    "product",
  ]);

  const handleClearSelection = () => {
    setSelectedIds([]);
  };

  const handleSelectAll = () => {
    const allIds = ["alice", "bob", "carol", "david", "eve", "frank"];
    setSelectedIds(allIds);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button onClick={handleSelectAll} size="sm" variant="outline">
          Select All Team Members
        </Button>
        <Button onClick={handleClearSelection} size="sm" variant="outline">
          Clear Selection
        </Button>
      </div>

      <TreeProvider
        defaultExpandedIds={expandedIds}
        selectedIds={selectedIds}
        onSelectionChange={setSelectedIds}
        multiSelect
      >
        <TreeView>
          <TreeNode nodeId="team" isLast>
            <TreeNodeTrigger>
              <TreeExpander hasChildren />
              <TreeIcon hasChildren />
              <TreeLabel>Team</TreeLabel>
            </TreeNodeTrigger>
            <TreeNodeContent hasChildren>
              <TreeNode nodeId="engineering" level={1}>
                <TreeNodeTrigger>
                  <TreeExpander hasChildren />
                  <TreeIcon hasChildren />
                  <TreeLabel>Engineering</TreeLabel>
                </TreeNodeTrigger>
                <TreeNodeContent hasChildren>
                  <TreeNode nodeId="alice" level={2}>
                    <TreeNodeTrigger>
                      <TreeExpander />
                      <TreeIcon />
                      <TreeLabel>Alice Johnson</TreeLabel>
                    </TreeNodeTrigger>
                  </TreeNode>
                  <TreeNode nodeId="bob" level={2} isLast>
                    <TreeNodeTrigger>
                      <TreeExpander />
                      <TreeIcon />
                      <TreeLabel>Bob Smith</TreeLabel>
                    </TreeNodeTrigger>
                  </TreeNode>
                </TreeNodeContent>
              </TreeNode>
              <TreeNode nodeId="design" level={1}>
                <TreeNodeTrigger>
                  <TreeExpander hasChildren />
                  <TreeIcon hasChildren />
                  <TreeLabel>Design</TreeLabel>
                </TreeNodeTrigger>
                <TreeNodeContent hasChildren>
                  <TreeNode nodeId="carol" level={2}>
                    <TreeNodeTrigger>
                      <TreeExpander />
                      <TreeIcon />
                      <TreeLabel>Carol Williams</TreeLabel>
                    </TreeNodeTrigger>
                  </TreeNode>
                  <TreeNode nodeId="david" level={2} isLast>
                    <TreeNodeTrigger>
                      <TreeExpander />
                      <TreeIcon />
                      <TreeLabel>David Brown</TreeLabel>
                    </TreeNodeTrigger>
                  </TreeNode>
                </TreeNodeContent>
              </TreeNode>
              <TreeNode nodeId="product" level={1} isLast>
                <TreeNodeTrigger>
                  <TreeExpander hasChildren />
                  <TreeIcon hasChildren />
                  <TreeLabel>Product</TreeLabel>
                </TreeNodeTrigger>
                <TreeNodeContent hasChildren>
                  <TreeNode nodeId="eve" level={2}>
                    <TreeNodeTrigger>
                      <TreeExpander />
                      <TreeIcon />
                      <TreeLabel>Eve Davis</TreeLabel>
                    </TreeNodeTrigger>
                  </TreeNode>
                  <TreeNode nodeId="frank" level={2} isLast>
                    <TreeNodeTrigger>
                      <TreeExpander />
                      <TreeIcon />
                      <TreeLabel>Frank Miller</TreeLabel>
                    </TreeNodeTrigger>
                  </TreeNode>
                </TreeNodeContent>
              </TreeNode>
            </TreeNodeContent>
          </TreeNode>
        </TreeView>
      </TreeProvider>

      {selectedIds.length > 0 && (
        <div className="text-sm text-muted-foreground">
          Selected: {selectedIds.join(", ")}
        </div>
      )}
    </div>
  );
}
