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

export default function TreeSimpleExample() {
  return (
    <TreeProvider>
      <TreeView>
        <TreeNode nodeId="documents">
          <TreeNodeTrigger>
            <TreeExpander hasChildren />
            <TreeIcon hasChildren />
            <TreeLabel>Documents</TreeLabel>
          </TreeNodeTrigger>
          <TreeNodeContent hasChildren>
            <TreeNode nodeId="work" level={1}>
              <TreeNodeTrigger>
                <TreeExpander hasChildren />
                <TreeIcon hasChildren />
                <TreeLabel>Work</TreeLabel>
              </TreeNodeTrigger>
              <TreeNodeContent hasChildren>
                <TreeNode nodeId="project-a" level={2}>
                  <TreeNodeTrigger>
                    <TreeExpander />
                    <TreeIcon />
                    <TreeLabel>Project A.pdf</TreeLabel>
                  </TreeNodeTrigger>
                </TreeNode>
                <TreeNode nodeId="project-b" level={2} isLast>
                  <TreeNodeTrigger>
                    <TreeExpander />
                    <TreeIcon />
                    <TreeLabel>Project B.pdf</TreeLabel>
                  </TreeNodeTrigger>
                </TreeNode>
              </TreeNodeContent>
            </TreeNode>
            <TreeNode nodeId="personal" level={1} isLast>
              <TreeNodeTrigger>
                <TreeExpander hasChildren />
                <TreeIcon hasChildren />
                <TreeLabel>Personal</TreeLabel>
              </TreeNodeTrigger>
              <TreeNodeContent hasChildren>
                <TreeNode nodeId="resume" level={2}>
                  <TreeNodeTrigger>
                    <TreeExpander />
                    <TreeIcon />
                    <TreeLabel>Resume.docx</TreeLabel>
                  </TreeNodeTrigger>
                </TreeNode>
                <TreeNode nodeId="cover-letter" level={2} isLast>
                  <TreeNodeTrigger>
                    <TreeExpander />
                    <TreeIcon />
                    <TreeLabel>Cover Letter.docx</TreeLabel>
                  </TreeNodeTrigger>
                </TreeNode>
              </TreeNodeContent>
            </TreeNode>
          </TreeNodeContent>
        </TreeNode>
        <TreeNode nodeId="downloads" isLast>
          <TreeNodeTrigger>
            <TreeExpander hasChildren />
            <TreeIcon hasChildren />
            <TreeLabel>Downloads</TreeLabel>
          </TreeNodeTrigger>
          <TreeNodeContent hasChildren>
            <TreeNode nodeId="installer" level={1}>
              <TreeNodeTrigger>
                <TreeExpander />
                <TreeIcon />
                <TreeLabel>installer.exe</TreeLabel>
              </TreeNodeTrigger>
            </TreeNode>
            <TreeNode nodeId="update" level={1} isLast>
              <TreeNodeTrigger>
                <TreeExpander />
                <TreeIcon />
                <TreeLabel>update.zip</TreeLabel>
              </TreeNodeTrigger>
            </TreeNode>
          </TreeNodeContent>
        </TreeNode>
      </TreeView>
    </TreeProvider>
  );
}
