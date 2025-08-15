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
import {
  Database,
  Globe,
  Key,
  Lock,
  Server,
  Shield,
  Table,
  User,
  Users,
} from "lucide-react";

export default function TreeCustomIconsExample() {
  return (
    <TreeProvider
      defaultExpandedIds={["database", "users-table", "roles-table", "api"]}
    >
      <TreeView>
        <TreeNode nodeId="database">
          <TreeNodeTrigger>
            <TreeExpander hasChildren />
            <TreeIcon
              icon={<Database className="h-4 w-4 text-blue-500" />}
              hasChildren
            />
            <TreeLabel>Database</TreeLabel>
          </TreeNodeTrigger>
          <TreeNodeContent hasChildren>
            <TreeNode nodeId="users-table" level={1}>
              <TreeNodeTrigger>
                <TreeExpander hasChildren />
                <TreeIcon
                  icon={<Table className="h-4 w-4 text-green-500" />}
                  hasChildren
                />
                <TreeLabel>Users</TreeLabel>
              </TreeNodeTrigger>
              <TreeNodeContent hasChildren>
                <TreeNode nodeId="id-field" level={2}>
                  <TreeNodeTrigger>
                    <TreeExpander />
                    <TreeIcon
                      icon={<Key className="h-4 w-4 text-yellow-500" />}
                    />
                    <TreeLabel>id</TreeLabel>
                  </TreeNodeTrigger>
                </TreeNode>
                <TreeNode nodeId="email-field" level={2}>
                  <TreeNodeTrigger>
                    <TreeExpander />
                    <TreeIcon
                      icon={<Globe className="h-4 w-4 text-purple-500" />}
                    />
                    <TreeLabel>email</TreeLabel>
                  </TreeNodeTrigger>
                </TreeNode>
                <TreeNode nodeId="password-field" level={2} isLast>
                  <TreeNodeTrigger>
                    <TreeExpander />
                    <TreeIcon
                      icon={<Lock className="h-4 w-4 text-red-500" />}
                    />
                    <TreeLabel>password</TreeLabel>
                  </TreeNodeTrigger>
                </TreeNode>
              </TreeNodeContent>
            </TreeNode>
            <TreeNode nodeId="roles-table" level={1} isLast>
              <TreeNodeTrigger>
                <TreeExpander hasChildren />
                <TreeIcon
                  icon={<Table className="h-4 w-4 text-green-500" />}
                  hasChildren
                />
                <TreeLabel>Roles</TreeLabel>
              </TreeNodeTrigger>
              <TreeNodeContent hasChildren>
                <TreeNode nodeId="admin-role" level={2}>
                  <TreeNodeTrigger>
                    <TreeExpander />
                    <TreeIcon
                      icon={<Shield className="h-4 w-4 text-orange-500" />}
                    />
                    <TreeLabel>Admin</TreeLabel>
                  </TreeNodeTrigger>
                </TreeNode>
                <TreeNode nodeId="user-role" level={2} isLast>
                  <TreeNodeTrigger>
                    <TreeExpander />
                    <TreeIcon
                      icon={<User className="h-4 w-4 text-blue-400" />}
                    />
                    <TreeLabel>User</TreeLabel>
                  </TreeNodeTrigger>
                </TreeNode>
              </TreeNodeContent>
            </TreeNode>
          </TreeNodeContent>
        </TreeNode>
        <TreeNode nodeId="api" isLast>
          <TreeNodeTrigger>
            <TreeExpander hasChildren />
            <TreeIcon
              icon={<Server className="h-4 w-4 text-indigo-500" />}
              hasChildren
            />
            <TreeLabel>API</TreeLabel>
          </TreeNodeTrigger>
          <TreeNodeContent hasChildren>
            <TreeNode nodeId="auth-endpoint" level={1}>
              <TreeNodeTrigger>
                <TreeExpander />
                <TreeIcon icon={<Lock className="h-4 w-4 text-red-500" />} />
                <TreeLabel>Authentication</TreeLabel>
              </TreeNodeTrigger>
            </TreeNode>
            <TreeNode nodeId="users-endpoint" level={1} isLast>
              <TreeNodeTrigger>
                <TreeExpander />
                <TreeIcon icon={<Users className="h-4 w-4 text-blue-500" />} />
                <TreeLabel>Users Management</TreeLabel>
              </TreeNodeTrigger>
            </TreeNode>
          </TreeNodeContent>
        </TreeNode>
      </TreeView>
    </TreeProvider>
  );
}
