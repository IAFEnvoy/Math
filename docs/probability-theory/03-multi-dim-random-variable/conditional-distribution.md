---
sidebar_position: 3
---

# 条件分布与条件期望

条件分布描述"已知 $Y = y$ 时 $X$ 的分布"。条件期望 $E(Y \mid X)$ 是给定 $X$ 的取值时 $Y$ 的"最优预测"。

## 离散型

### 条件分布列

$$P(X = x_i \mid Y = y_j) = \frac{p_{ij}}{p_{\cdot j}}, \quad p_{\cdot j} > 0$$

固定 $Y = y_j$，$\{P(X = x_i \mid Y = y_j)\}$ 是一族概率（对应随机变量 $X \mid Y = y_j$）。

### 条件期望

$$E(X \mid Y = y_j) = \sum_i x_i \cdot P(X = x_i \mid Y = y_j)$$

## 连续型

### 条件密度

$$f_{X \mid Y}(x \mid y) = \frac{f(x, y)}{f_Y(y)}, \quad f_Y(y) > 0$$

### 条件期望

$$E(X \mid Y = y) = \int_{-\infty}^{\infty} x \, f_{X \mid Y}(x \mid y)\,dx$$

### 条件方差

$$\operatorname{Var}(X \mid Y = y) = E(X^2 \mid Y = y) - [E(X \mid Y = y)]^2$$

## 全期望公式

条件期望最重要的工具：

$$E(X) = E[E(X \mid Y)]$$

对离散型：$E(X) = \sum_j E(X \mid Y = y_j) \cdot P(Y = y_j)$

对连续型：$E(X) = \int E(X \mid Y = y) \cdot f_Y(y)\,dy$

## 全方差公式

$$\operatorname{Var}(X) = E[\operatorname{Var}(X \mid Y)] + \operatorname{Var}[E(X \mid Y)]$$

**组内方差期望 + 组间期望方差**。

### 应用：分层抽样

将总体按 $Y$ 分层，组内方差反映每层内部的波动，组间方差反映各层均值之间的差异。全方差公式是分层抽样方差分析的基础。

## 条件期望的性质

1. **线性性**：$E(aX + bZ \mid Y) = aE(X \mid Y) + bE(Z \mid Y)$
2. **独立性**：若 $X \perp\!\!\!\perp Y$，则 $E(X \mid Y) = E(X)$
3. **抽出已知**：$E(h(Y)X \mid Y) = h(Y)E(X \mid Y)$
4. **全期望迭代**：$E[E(X \mid Y, Z) \mid Y] = E(X \mid Y)$
5. **最优预测**：$E(Y \mid X)$ 是 $Y$ 关于 $X$ 的最小均方误差预测

## $E(Y \mid X)$ 是最优预测

在均方误差意义下，$E(Y \mid X)$ 是用 $X$ 预测 $Y$ 的最优函数：

$$E(Y \mid X) = \arg\min_{g} E[(Y - g(X))^2]$$

其中 $g$ 取遍所有可测函数。线性回归给出的 $aX+b$ 是所有**线性**函数中的最优预测，而 $E(Y \mid X)$ 是所有函数中的最优预测。
