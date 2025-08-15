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

export default function TreeNoLinesExample() {
  return (
    <TreeProvider
      showLines={false}
      defaultExpandedIds={["projects", "website-redesign"]}
    >
      <TreeView>
        <TreeNode nodeId="projects">
          <TreeNodeTrigger>
            <TreeExpander hasChildren />
            <TreeIcon hasChildren />
            <TreeLabel>Projects</TreeLabel>
          </TreeNodeTrigger>
          <TreeNodeContent hasChildren>
            <TreeNode nodeId="website-redesign" level={1}>
              <TreeNodeTrigger>
                <TreeExpander hasChildren />
                <TreeIcon hasChildren />
                <TreeLabel>Website Redesign</TreeLabel>
              </TreeNodeTrigger>
              <TreeNodeContent hasChildren>
                <TreeNode nodeId="homepage" level={2}>
                  <TreeNodeTrigger>
                    <TreeExpander />
                    <TreeIcon />
                    <TreeLabel>Homepage</TreeLabel>
                  </TreeNodeTrigger>
                </TreeNode>
                <TreeNode nodeId="about-page" level={2}>
                  <TreeNodeTrigger>
                    <TreeExpander />
                    <TreeIcon />
                    <TreeLabel>About Page</TreeLabel>
                  </TreeNodeTrigger>
                </TreeNode>
                <TreeNode nodeId="contact-form" level={2} isLast>
                  <TreeNodeTrigger>
                    <TreeExpander />
                    <TreeIcon />
                    <TreeLabel>Contact Form</TreeLabel>
                  </TreeNodeTrigger>
                </TreeNode>
              </TreeNodeContent>
            </TreeNode>
            <TreeNode nodeId="mobile-app" level={1} isLast>
              <TreeNodeTrigger>
                <TreeExpander hasChildren />
                <TreeIcon hasChildren />
                <TreeLabel>Mobile App</TreeLabel>
              </TreeNodeTrigger>
              <TreeNodeContent hasChildren>
                <TreeNode nodeId="ios-version" level={2}>
                  <TreeNodeTrigger>
                    <TreeExpander />
                    <TreeIcon />
                    <TreeLabel>iOS Version</TreeLabel>
                  </TreeNodeTrigger>
                </TreeNode>
                <TreeNode nodeId="android-version" level={2} isLast>
                  <TreeNodeTrigger>
                    <TreeExpander />
                    <TreeIcon />
                    <TreeLabel>Android Version</TreeLabel>
                  </TreeNodeTrigger>
                </TreeNode>
              </TreeNodeContent>
            </TreeNode>
          </TreeNodeContent>
        </TreeNode>
        <TreeNode nodeId="resources" isLast>
          <TreeNodeTrigger>
            <TreeExpander hasChildren />
            <TreeIcon hasChildren />
            <TreeLabel>Resources</TreeLabel>
          </TreeNodeTrigger>
          <TreeNodeContent hasChildren>
            <TreeNode nodeId="documentation" level={1}>
              <TreeNodeTrigger>
                <TreeExpander />
                <TreeIcon />
                <TreeLabel>Documentation</TreeLabel>
              </TreeNodeTrigger>
            </TreeNode>
            <TreeNode nodeId="api-reference" level={1}>
              <TreeNodeTrigger>
                <TreeExpander />
                <TreeIcon />
                <TreeLabel>API Reference</TreeLabel>
              </TreeNodeTrigger>
            </TreeNode>
            <TreeNode nodeId="examples" level={1} isLast>
              <TreeNodeTrigger>
                <TreeExpander />
                <TreeIcon />
                <TreeLabel>Examples</TreeLabel>
              </TreeNodeTrigger>
            </TreeNode>
          </TreeNodeContent>
        </TreeNode>
      </TreeView>
    </TreeProvider>
  );
}
