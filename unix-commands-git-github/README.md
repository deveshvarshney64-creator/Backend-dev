Task 1: Basic Git Workflow
mkdir my-git-project
cd my-git-project
git init
New-Item README.md
git add README.md
git commit -m "Initial commit with README"
echo "Updated README file" >> README.md
git add README.md
git commit -m "Updated README"
git log

Task 2: Branching and Merging
git checkout -b feature
New-Item feature.txt
git add feature.txt
git commit -m "Added feature file"
git checkout main
git merge feature
git branch -d feature

Task 3: Conflict Resolution
git checkout -b branch1
git add .
git commit -m "Updated README in branch1"
git checkout main
git checkout -b branch2
git add .
git commit -m "Updated README in branch2"
git checkout main
git merge branch1
git merge branch2
git add .
git commit -m "Resolved merge conflict"

Task 4: GitHub Collaboration
git clone https://github.com/deveshvarshney64-creator/Backend-Dev.git
git checkout -b my-feature
git add .
git commit -m "Made changes in my feature branch"
git push origin my-feature

Task 5: Advanced Workflow
git init
New-Item file1.txt
New-Item file2.txt
git add .
git commit -m "Initial commit with multiple files"
New-Item .gitignore
echo "node_modules/" >> .gitignore
git add .gitignore
git commit -m "Added .gitignore"
git stash
git tag v1.0
git push origin main --tags